import {
	useJournalEntries,
	getEntries,
	useEntries,
} from './JournalDataProvider.js';
import { JournalEntryComponent } from './JournalEntry.js';
import { EntryListComponent } from './JournalEntryList.js';
import { JournalFormComponent } from './JournalForm.js';
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
