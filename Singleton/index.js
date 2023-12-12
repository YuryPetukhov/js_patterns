class ServerConnection {
  constructor(url) {
    this.url = url;
    this.isConnected = false;
  }

  connect() {
    this.isConnected = true;
    console.log(`Connected to ${this.url}`);
  }

  disconnect() {
    this.isConnected = false;
    console.log(`Disconnected from ${this.url}`);
  }
}

// Below we are going to create SingletonServerConnection which should return instance if connection already connect
class SingletonServerConnection {
  constructor(url) {
    if (SingletonServerConnection.instance) {
      return SingletonServerConnection.instance;
    }

    this.serverConnection = new ServerConnection(url);
    SingletonServerConnection.instance = this;

    return this;
  }

  getServerConnection() {
    return this.serverConnection;
  }
}

const connection1 = new SingletonServerConnection(
  'http://example.com'
).getServerConnection();
connection1.connect();
// log  'http://example.com'

const connection2 = new SingletonServerConnection(
  'http://another-server.com'
).getServerConnection();
connection2.connect();
// log  'http://example.com' because we already created connection

console.log(connection1 === connection2); // checking equals of instances
