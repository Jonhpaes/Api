function tempo(request, response){
    const dynamicDate = Date();

    response.json({
        date: dynamicDate.toGMTSring()
    });
}

export default tempo;