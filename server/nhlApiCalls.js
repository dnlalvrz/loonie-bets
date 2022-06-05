const request = require('request-promise');

const fetchApiSchedule = async () => {
    const options = {
      uri: 'https://statsapi.web.nhl.com/api/v1/schedule',
      headers: {
          "Accept": "application/json"
      },
      json: true // Automatically parses the JSON string in the response
    } 
    
    try {
      const response = await request(options);
  
      return response.dates;
  
    } catch (error) {
        console.log(error);
    }
  };

  module.exports = {fetchApiSchedule};