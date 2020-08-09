const express = require("express");
const router = express.Router();
const Dream = require('../../models/Dream');
const passport = require('passport');

router.use((req, res, next) => {
  console.log('path:', req.path);
  next();
});

// router.get("/", (req, res) => res.json({ msg: "This is the users route" }));
router.get('/', (req, res) => {
    //debugger
    console.log('hello from route!!!')
    // console.log('req', req)
    Dream.find()
        .then(dreams => {
            console.log('dreams', dreams)
            return res.json(dreams)})
        .catch(err => res.status(404).json({ notartworksfound: 'No dreams found' }));
});

router.get('/:id', (req, res) => {
    console.log('id route')
    Dream.find({_id: req.params.id})
        .then(dream => res.json(dream))
        .catch(err => res.status(404).json({ noartworksfound: 'No dream found' }));
});

router.patch('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Dream.find({_id: req.params.id})
        .update({
            dream: req.body
         })
        .then(dream => {
            return res.json(dream)})
        .catch(err => res.status(404).json({ noartworksfound: 'No artworks found' }));   
    }
);

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Dream.findByIdAndDelete({_id: req.params.id})
      .then(() => {
          return res.json({msg: 'Dream removed'})})
      .catch(err => res.status(404).json({ noartworksfound: 'No artworks found' }));   
  }
);


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // console.log('req', req)
    //   const { errors, isValid } = validateTweetInput(req.body);
        
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }
    
  
      const newDream = new Dream({
        title: req.body.title,
        dreamer: req.user.id,
        description: req.body.description
      });
      console.log('newDream', newDream)
      newDream.save().then(dream => {
        console.log('dream', dream)
        return res.json(dream)})
      .catch(err => res.status(404).json({ noartworksfound: 'No artworks found' }));
    }
  );


module.exports = router;
