const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8489475089:AAH_GsrVVORDq7bGEkvAC-5a2PN_LrsDgv8',
  id: isNaN(parsedId) ? 1330050802 : parsedId // replace 12345.. with your telegram chat id
};
