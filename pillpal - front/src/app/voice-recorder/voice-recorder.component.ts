import { Component } from '@angular/core';
import * as lamejs from 'lamejs';

@Component({
  selector: 'app-voice-recorder',
  templateUrl: './voice-recorder.component.html',
  styleUrls: ['./voice-recorder.component.css']
})
export class VoiceRecorderComponent {
  mediaRecorder?: MediaRecorder; // Utiliser '?' pour indiquer que cette propriété peut être undefined
  audioChunks: Blob[] = [];
  audioUrl?: string; // Utiliser '?' pour indiquer que cette propriété peut être undefined

  startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.start();

        this.mediaRecorder.addEventListener('dataavailable', event => {
          this.audioChunks.push(event.data);
        });

        this.mediaRecorder.addEventListener('stop', () => {
          if (this.mediaRecorder) { // Vérifier que mediaRecorder est défini
            const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
            this.convertToMP3(audioBlob);
            this.audioChunks = [];
          }
        });
      })
      .catch(error => console.error('Erreur lors de l\'accès au micro:', error));
  }

  stopRecording() {
    if (this.mediaRecorder) { // Vérifier que mediaRecorder est défini
      this.mediaRecorder.stop();
    }
  }

  convertToMP3(audioBlob: Blob) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(audioBlob);

    reader.onloadend = () => {
      if (reader.result) { // Vérifier que reader.result est défini
        const audioData = reader.result as ArrayBuffer;
        const wavHeader = lamejs.WavHeader.readHeader(new DataView(audioData));
        if (wavHeader) { // Vérifier que wavHeader est défini
          const samples = new Int16Array(audioData, wavHeader.dataOffset, wavHeader.dataLen / 2);

          const mp3Encoder = new lamejs.Mp3Encoder(1, wavHeader.sampleRate, 128);
          const mp3Data = mp3Encoder.encodeBuffer(samples);
          const mp3Blob = new Blob([new Uint8Array(mp3Data)], { type: 'audio/mp3' });

          this.audioUrl = URL.createObjectURL(mp3Blob);
          this.uploadAudio(mp3Blob);
        } else {
          console.error('Erreur lors de la lecture des en-têtes WAV');
        }
      }
    };
  }

  uploadAudio(audioBlob: Blob) {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.mp3');

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur lors du téléchargement:', error));
  }
}
