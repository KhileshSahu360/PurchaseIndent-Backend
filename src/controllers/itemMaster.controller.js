import ItemMaster from "../models/itemName.model.js";


const addNewItem = async(req, res) => {
    const { item } = req.body;
    try {
        const newItem = new ItemMaster(item);
        const result = await newItem.save();

        if(result){
            res.status(200).json({status : true, msg: 'new Item created successfully', newItem : result})
        }
    } catch (error) {
        res.status(500).json({error, msg: 'error while creating new Item'})
    }

}

const getItems = async(req, res) => {
    try {
        const items = await ItemMaster.find();
        if(items){
            res.status(200).json(items)
        }
    } catch (error) {
        res.status(500).json({error, msg: 'error while getting the items from itemMaster'})
    }

}

export { addNewItem, getItems }