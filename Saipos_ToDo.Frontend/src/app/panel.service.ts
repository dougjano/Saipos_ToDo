import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PanelService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:50162';

  constructor(private http: HttpClient) {
  this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  public getAuth(password) {
    return this.http.get(this.accessPointUrl + '/Auth' + '?password=' + password).toPromise()
    .then(response => {
      return 'ok';})
      .catch((error: any) => { 
        if(error.status != 200){
          alert(error.error);
        }
        return error
    });;
  }

  public getPanel() {
    return this.http.get(this.accessPointUrl + '/Panel');
  }

  public postPanel(id) {
    return this.http.post(this.accessPointUrl + '/Panel', id).toPromise()
    .then(response => {
      return response;})
      .catch((error: any) => {
        if(error.status != 200){
          alert(error.error);
        }
        return error
    });
  }

  public postRandomize() {
    return this.http.post(this.accessPointUrl + '/Randomize', '').toPromise()
    .then(response => {
      return response;})
      .catch((error: any) => {       
        return error
    });
  }

  public getTask(id) {
    return this.http.get(this.accessPointUrl + '/Task', id);
  }

  public postTask(task) {
    this.http.post(this.accessPointUrl + '/Task', task).toPromise()
    .then(response => {
      return response;})
      .catch((error: any) => {
        alert(error.error);
        return error
    });
  }

}
