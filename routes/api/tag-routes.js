const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: [
      'id',
      'tag_name',
      
    ],
    include: [
      {
        model:Product,
        through: ProductTag
      },
      Category
    ]
    
  }).then(products => (res.json(products)))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'tag_name',
      
    ],
    include: [
      {
        model:Product,
        through: ProductTag
      },
      Category
       
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
  // create a new tag
  Tag.create(req.body)
   
      res.status(200).json(product);
    });
    

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where: { id:req.params.id}})
  .then(data =>{
    console.log(data);
    res.json(data);
    
  }).catch(err=>{
    console.log(err)
    res.status(400).json(err);
  })
});

module.exports = router;
