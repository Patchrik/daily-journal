import {
	useJournalEntries,
	getEntries,
	useEntries,
} from './JournalDataProvider.js';
import { JournalEntryComponent } from './JournalEntry.js';
import { EntryListComponent } from './JournalEntryList.js';
let testArray = [];
EntryListComponent();
getEntries().then((_) => {
	testArray = useEntries();
});

console.log(testArray);
