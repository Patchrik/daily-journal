/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, useEntries } from './JournalDataProvider.js';
import { JournalEntryComponent } from './JournalEntry.js';

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector('.ul--previousEntries');

export const EntryListComponent = (entries) => {
	// Use the journal entry data from the data provider component
	for (const entry of entries) {
		/*
            Invoke the component that returns an
            HTML representation of a single entry
        */
		entryLog.innerHTML += JournalEntryComponent(entry);
	}
};
