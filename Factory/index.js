class OutlookCalendar {
  createEvent({ name, date, participants }) {
    MicrosoftAPI.createEvent({ title: name, date, users: participants });
  }
}

class AppleCalendar {
  createEvent({ name, date, participants }) {
    AppleAPI.createEvent({ name, date, participants });
  }
}

class GoogleCalendar {
  createEvent({ name, date, participants }) {
    GoogleAPI.createEvent({ title: name, date, invitees: participants });
  }
}

class Application {
  calendar;

  constructor(calendar) {
    this.calendar = calendar;
  }

  run() {
    this.calendar.createEvent({
      name: 'Abstract Factory Pattern',
      date: new Date(),
      participants: [],
    });
  }
}

class Configuration {
  calendar;

  constructor(config) {
    switch (config.os) {
      case 'ios':
        this.calendar = new AppleCalendar();
        break;
      case 'chromeos':
        this.calendar = new GoogleCalendar();
        break;
      case 'windows':
        this.calendar = new OutlookCalendar();
        break;
      default:
        throw new Error('OS is not supported');
    }
  }

  setup() {
    new Application(this.calendar).run();
  }
}
