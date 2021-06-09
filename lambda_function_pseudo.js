const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (event.routeKey) {
      case "GET /api":
        // Display API information
        break;
      case "GET /api/customer/{id}":
        body = await dynamo
          .get({ // Add filter here
          })
          .promise();
        break;
      default:
      case "GET /api/product/{id}":
        body = await dynamo
          .get({ // Add filter here
          })
          .promise();
        break;
      default:
      case "GET /api/order/{id}":
        body = await dynamo
          .get({ // Add filter here
          })
          .promise();
        break;
      case "GET /api/customer-orders/{id}":
        body = await dynamo
          .get({ // Add filter here
          })
          .promise();
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
