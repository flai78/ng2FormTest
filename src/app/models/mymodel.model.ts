import { Culture } from './culture.model';

export class MyModel{
    constructor(
        public name: string,
        public lastName: string,
        public isChk: boolean,
        public rdbVal: string,
        public selectedCultureItem: Culture

    ){
        
    }
}