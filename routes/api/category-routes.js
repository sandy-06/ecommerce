const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: [
      'id',
      'category-name',
    ],
    include:[
      Product
    ]
 })
  .then(category => (res.json(category)))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products\
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_id'
    ],
    include: [
       Product
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category\
  Category.create(req.body)
  
    res.status(200).json(product);
  });
  

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: { id:req.params.id}})
  .then(data =>{
    console.log(data);
    res.json(data);
    
  }).catch(err=>{
    console.log(err)
    res.status(400).json(err);
  })
});

module.exports = router;
