import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app =express();
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.urlencoded({extended:true}))

const dbSchema = new mongoose.Schema({
    details:
    {
        image: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true

        },
        totalExp:
        {
            type: String,
            required: true

        },
    },

    AboutMe:
    {
        message: {
            type: String,
            required: true
        },

        pointers: {
            type: Array,

        },
    }
    ,

    workExperience:
    {
        clientDescription: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        projectName: {
            type: String,
            required: true
        },
        roleWork: {
            type: String,
            required: true
        },
        startDate: {
            type: String,
            required: true
        },
        endDate: {
            type: String,
            required: true
        },
        businessSolution: {
            type: String,
            required: true
        },
        technologyStack: {
            type: Array,
            required: true
        },
        projectResponsibility: {
            type: Array,
            required: true
        },


    }
})
const dbModel =mongoose.model('information',dbSchema);
const port = 8000;

app.get('/',async(req,res) => {
    const data = await dbModel.find();
    res.json(data);
    res.send(data);
});

app.post('/send', async (req,res) => {
    try{
        const dataToSave = new dbModel(req.body)
        await dataToSave.save()
        res.status(200).json({message:"data saved",dataToSave})
        console.log(dataToSave)
    }
    catch (err){
        console.log(err)
    }
})
mongoose.connect("mongodb://127.0.0.1:27017/resumebuilder").then((response)=> 
app.listen(port,()=>{
    console.log("server started")
})
).catch((error) =>{
    console.log(error)
})