namespace Park{
   export class Car{
        private _model:string;
        set model(m: string){
            this.model=m;
        };
        get model():string{
            return this._model;
        }
        constructor(model: string){
            this._model = model;
        }
    }
}