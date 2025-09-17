const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8364844663:AAEQI_q5QmfYEoWdCoh807Hz0dItaChozBI',
  id: isNaN(parsedId) ? 7167916864 : parsedId // replace 12345 .. with your telegram chat id
};
