const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobType: { type: String   },
  location: { type: String   },
  payRate: { type: Number   },
  postedBy: { type: Schema.Types.ObjectId, ref: 'Contractor'   },
  skillsRequired: { type: String   },
  workersRequired: { type: Number },
  accomodation: { type: Boolean },
  transportation: { type: Boolean },
  startDate: { type: Date },
  endDate: { type: Date },
});

const Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;
