import {
  useJournalEntries,
  getEntries,
  useEntries,
} from './JournalDataProvider.js';
import {
  JournalEntryComponent,
  renderMoodRadioButtons,
} from './JournalEntry.js';
import { EntryListComponent } from './JournalEntryList.js';
import { JournalFormComponent } from './JournalForm.js';
import { getMoods, useMoods } from './MoodDataProvider.js';
JournalFormComponent();
let testArray = [];
getEntries()
  .then((_) => {
    testArray = useEntries();
  })
  .then((_) => {
    EntryListComponent(testArray);
  });

console.log(testArray);
getMoods().then(useMoods).then(renderMoodRadioButtons);
