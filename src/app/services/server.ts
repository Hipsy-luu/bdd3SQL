import * as cosmos from '@azure/cosmos';
const CosmosClient = cosmos.CosmosClient;

const endPoint = 'https://demoacount.documents.azure.com:443/';
const masterkey = 'VqQUqIr7bfAf6e4ZvtrACH3J0wrlVHspzjqVSxwD4Lqyx9BJThT8E4tVZ1q4nvcVTkXaJuQuehjFuyq0iVM5qg==';
const client = new CosmosClient({ endpoint: endPoint, key: masterkey });
const databaseId = "Northwind";



async function run() {

    // const { database } = await client.databases.createIfNotExists({ id: databaseId });
    // const { container } = await database.containers.createIfNotExists({ id: containerId });
    // //const { resources: dbDefList } = await database.containers.readAll().fetchAll();
    // //console.log(dbDefList);

    // const { resources: itemDefList } = await container.items.readAll().fetchAll();

    // for (const itemDef of itemDefList) {
    //     console.log(itemDef);
    // }
    // console.log(itemDefList.length);
    
    

}

async function insert(containerId, obj) {
    const { database } = await client.databases.createIfNotExists({ id: databaseId });
    const { container } = await database.containers.createIfNotExists({ id: containerId });
    await container.items.create(obj).catch(err => {
        console.log(err);
    });
}

async function getItems( containerId) {
    const { database } = await client.databases.createIfNotExists({ id: databaseId });
    const { container } = await database.containers.createIfNotExists({ id: containerId });
    const { resources: itemDefList } = await container.items.readAll().fetchAll();
    return itemDefList;
}

async function deleteItem(containerId, obj){
    const { database } = await client.databases.createIfNotExists({ id: databaseId });
    const { container } = await database.containers.createIfNotExists({ id: containerId });
    const item = container.item(obj, undefined);
    await item.delete();
}

async function updateItem(containerId, obj, id){
    const { database } = await client.databases.createIfNotExists({ id: databaseId });
    const { container } = await database.containers.createIfNotExists({ id: containerId });
    const item = container.item(id, undefined);
    await item.replace(obj);
}


export {insert, getItems, deleteItem, updateItem};