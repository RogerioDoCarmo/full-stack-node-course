export default class Database {

    constructor() {

        this.listEvents = {

        };
    }

    add(date, event) {

        if (Array.isArray(this.listEvents[date])) {
            
            this.listEvents[date].push(event);
        }
        else {
            this.listEvents[date] = [event];
        }

        this.sort(date);

        console.log(`new event in ${date}`);
    }

    get(date) {

        console.log(`get all events in ${date}`);
        return (this.listEvents.hasOwnProperty(date) ? this.listEvents[date] : []); 
    }

    sort(date) {

        this.listEvents[date].sort((a,b) => {
            if (a.horario < b.horario) return -1; 
            if (a.horario > b.horario) return  1; 
            return 0;
        });
    }
}