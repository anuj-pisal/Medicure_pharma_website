const mongoose = require('mongoose');

const SingleSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  NoOfTest: { type: String, required: true },
  SampleTest1: { type: String, required: true },
  SampleTest2: { type: String, required: true },
  SampleTest3: { type: String, required: true },
  Price: { type: Number, required: true },
  Subtitle: { type: String, required: true },
  TestPreparation1: { type: String, required: true },
  TestPreparation2: { type: String },
  TestPreparation3: { type: String },
  TestPreparation4: { type: String },
  UnderStandHeader: { type: String, required: true },
  Question1: { type: String, required: true },
  Answer1: { type: String, required: true },
  Question2: { type: String },
  AccordionHeader1: { type: String, required: true },
  Accordion1Answer: { type: String, required: true },
  AccordionHeader2: { type: String, required: true },
  Accordion2Answer: { type: String, required: true },
  AccordionHeader3: { type: String, required: true },
  Accordion3Answer: { type: String, required: true },
  Title2: { type: String, required: true },
  srno: {type: Number, required: true}
});
const TestPackage = mongoose.model('singlepackage', SingleSchema);

module.exports = TestPackage;