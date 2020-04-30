exports.getTasks = (req, res, next) => {
  res.status(200).json({
    name: 'Luffy',
    task: 'Clean ship'
  })
}
