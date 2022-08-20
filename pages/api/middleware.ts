function handler(req, res) {


    res.status(200).json({ hello: 'world!' });

}

const withAuth = (handlerFn) => (req, res) => {
    if(!req.headers.authentication) {
        res.status(401).json({ message: "unauthorized" });
    }

    return handlerFn(req, res);
}

export default withAuth(handler);