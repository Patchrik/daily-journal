import { deleteEntry, getEntries, useEntries } from './JournalDataProvider.js';
import { EntryListComponent } from './JournalEntryList.js';
/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const eventHub = document.querySelector('aside');

export const JournalEntryComponent = (entry) => {
	let entryIdMood;
	if (parseInt(entry.mood.id) === parseInt(entry.moodId)) {
		entryIdMood = entry.mood.mood;
	}
	return `
        <li>
        <div id="entry--${entry.id}" class="journalEntry">
            <h4>Title: ${entry.concept}</h4>
            <p>${entry.entry}</p>
            <p>Date Written: ${entry.date}</p>
            <p>Mood: ${entryIdMood}</p>
            <button id="deleteNote--${entry.id}">Delete</button>
        </div>
        </li>
    `;
};

addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('deleteNote--')) {
		const [throwAwayTaco, id] = clickEvent.target.id.split('--');

		deleteEntry(id)
			.then(getEntries)
			.then((_) => {
				const updatedEntries = useEntries();
				EntryListComponent(updatedEntries);
			});
	}
});
