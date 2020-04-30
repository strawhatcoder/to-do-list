exports.getTasks = (req, res, next) => {
  res.status(200).json([
    {
      createdBy: 'Luffy',
      name: 'Clean ship'
    }
  ])
}
