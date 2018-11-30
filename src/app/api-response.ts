export class ApiResponse {
    data: any;
    meta: any;

    /**
     * Allows to cast whole response to DTO object
     */
    static cast<T>(data: object, type: (new () => T)): T {

        let obj = new type;

        for (let key in data) {
            obj[key] = data[key];
        }

        return obj;
    }

    /**
     * Allows to cast data as an array of DTO
     */
    static castArray<T>(data: Array<any>, type: (new () => T)): Array<T> {
        let arr = new Array<T>();

        data.forEach((item) => {
            arr.push(this.cast<T>(item, type));
        });

        return arr;
    }
}