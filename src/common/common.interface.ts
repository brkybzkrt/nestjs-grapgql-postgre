

export interface CommonInterface {

    findAll();

    findById(id: string);

    create(data:any);
    deleteById(id: string);

    updateById(id: string,data:any);
}