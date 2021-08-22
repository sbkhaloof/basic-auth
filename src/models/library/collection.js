'use strict'; 

class Collection {
    constructor(model){
        this.model = model;
    }

    async getAll(){
        let allRecords = await this.model.findAll();
        return allRecords;
    }

    async getOne(userName){
        let record  = await this.model.findOne({where : { userName }});
        return record;
    }

    async create(modelInfo){
        let newRecord = await this.model.create(modelInfo);
        return newRecord;
    }

    async update(modelInfo , userName){
        let record = await this.model.findOne({where : {userName}});
        let updatedRecord = await record.update(modelInfo);
        return updatedRecord;
    }

    async delete(userName){
        await this.model.destroy({where : {userName}});
    }

}

module.exports = Collection;