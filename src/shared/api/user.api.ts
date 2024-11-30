import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "@/src/environments/environment";
import {Observable} from "rxjs";

export type TCreateUserResponse = {
  id:string,
  username:string,
  email:string
  ,role:string,
  createdAt:string
}

@Injectable({providedIn:'root'})
export class UserAPI {

  private readonly http = inject(HttpClient);

  /**
   * ユーザを作成する
   * @param id uuid
   * @param email
   * @param username
   */
  create = ({id,email,username}:{id:string,email:string,username:string}):Observable<{data:TCreateUserResponse}> => {
    return this.http.post<{ data: TCreateUserResponse }>(`${environment.endpoints.api}/user/create`,{
      id,
      email,
      username,
    });
  }
  /**
   * ユーザが存在するか確認する
   * @param id
   */
  existUserById = ({id}:{id:string}):Observable<{exist:boolean}> => {
    return this.http.get<{exist:boolean}>(`${environment.endpoints.api}/user/${id}`);
  };
}
