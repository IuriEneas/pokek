import {Injectable} from '@angular/core';
import {mockTypes, mockTypesDetail} from "./mock";

@Injectable({
  providedIn: 'root'
})
export class PokekService {
  async fetchPokek(): Promise<any> {
    const moveListString = localStorage.getItem('typeList');
    if (moveListString) return JSON.parse(moveListString).results;

    let moveList: any = mockTypes;
    localStorage.setItem('typeList', JSON.stringify(moveList));

    return moveList.results;
  }

  async fetchObj(obj: any): Promise<any> {
    const moveListString = localStorage.getItem('types');
    const moves: any[] = moveListString ? JSON.parse(moveListString) : [];

    const moveData = moves?.find((m: any) => m.name === obj.name);
    if (moveData) return moveData;

    const fetchMove = mockTypesDetail.find((m: any) => m.name === obj.name);
    moves.push(fetchMove);
    localStorage.setItem('types', JSON.stringify(moves));
    return fetchMove;
  }
}
