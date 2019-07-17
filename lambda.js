exports.handler = async (event) => {
    // TODO implement
    const obj ={
        name:"jose",
        lastName:"garcia"
    }
    const response = {
        statusCode: 200,
        body: obj
    };
    return response;
};

exports.testing = async (event)=>{
    console.log('información: ',event)
    let name='';
    let response ={};
    try {
        name = event.name;
        const array = event.skills;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(element);
        }
        response = array;
    } catch (error) {
        name = 'No se envió la información';
        console.log(error);
    }
    //res.json(event.skills);
    return response;
}