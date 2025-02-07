const Song = require("../models/song");

exports.getSong = async (req, res) => {
  try {
    const allsongs = await Song.find();
    const response = {
      message: "Song successfully created",
      song: allsongs,
    };
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.uploadSong = async (req, res) => {
  const reqBody = req.body;
  const reqFile = req.file;   // image/file information
  const obj = {
    songTitle: reqBody.songTitle,
    singerName: reqBody.singerName,
    album: reqBody.album,
    year: reqBody.year,
    description: reqBody.description, 
    imageLink: reqFile.path,
  };
  const song = new Song(obj);
  await song.save();
  return res.send({
    message: "Song successfully created",
    song: song,
  });
};

// if (req.file) {
//   songSchema.picture = {
//     data: req.file.buffer,
//     contentType: req.file.mimetype
//   };
// }

// try {
//   const songSchema =  newSong.save();
//   res.send(songSchema);
// } catch (err) {
//   console.error(err);
//   res.status(500).send('Server Error');
// }
