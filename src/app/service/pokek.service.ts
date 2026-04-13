import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokekService {
  constructor(private httpClient: HttpClient) {
  }

  async fetchPokek(): Promise<any> {
    const moveListString = sessionStorage.getItem('typeList');
    if (moveListString) return JSON.parse(moveListString).results;

    let moveList: any = await firstValueFrom(this.httpClient.get('https://pokeapi.co/api/v2/type?limit=1000'));
    sessionStorage.setItem('typeList', JSON.stringify(moveList));

    return moveList.results;
  }

  async fetchObj(obj: any): Promise<any> {
    const moveListString = sessionStorage.getItem('types');
    const moves: any[] = moveListString ? JSON.parse(moveListString) : [];

    const moveData = moves?.find((m: any) => m.name === obj.name);
    if (moveData) return moveData;

    const fetchMove = await firstValueFrom(this.httpClient.get(obj.url));
    moves.push(fetchMove);
    sessionStorage.setItem('types', JSON.stringify(moves));
    return fetchMove;
  }
}
