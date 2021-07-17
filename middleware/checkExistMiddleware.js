

const checkExistMiddleware = (Model) => async (req, res, next) => {
    const { id } = req.params;
    try {
        const existItem = await Model.findById(id)
        if (existItem) {
            next()
        } else {
            res.status(404).send(`Not found ${id}`)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = checkExistMiddleware;