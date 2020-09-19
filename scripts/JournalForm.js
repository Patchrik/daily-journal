// This will be the event to capture the journal entry data in a custom event

import { saveEntries } from './JournalDataProvider.js';

const eventHub = document.querySelector('.formAreaWrapper');

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.startsWith('record')) {
		const savedEntryTextFromDom = document.querySelector('#journalEntry').value;
		const savedConceptFromDom = document.querySelector('#journalConcept').value;
		const savedMoodFromDom = document.querySelector('#journalMood').value;
		const savedDateFromDom = document.querySelector('#journalDate').value;
		if (savedEntryTextFromDom === '') {
			// alert the users to enter text in the journal field
			alert('Please place text in the journal field');
		} else if (savedConceptFromDom === '') {
			// alert the user to enter a concept in the field
			alert('Please enter a concept in the journal concept field');
		} else if (savedMoodFromDom === '') {
			// alert the user to enter a mood in the field
			alert('Please enter a mood');
		} else if (savedDateFromDom === '') {
			alert('Please select a date');
		} else {
			const newEntry = {
				date: savedDateFromDom,
				concept: savedConceptFromDom,
				entry: savedEntryTextFromDom,
				mood: savedMoodFromDom,
			};
			saveEntries(newEntry);
		}
	}
});

const mainFormTarget = document.querySelector('.formAreaWrapper');

export const JournalFormComponent = () => {
	mainFormTarget.innerHTML = `<fieldset class="MainFieldContainer">
					<!-- Here is the text field that we will type in -->
					<label for="journalEntry">Journal Entry</label>
					<textarea
						name="journalEntry"
						id="journalEntry"
						cols="45"
						rows="15"
					></textarea>
					<div class="bottomOfTextAreaFlexWrapper">
						<!-- This is the field for holding dates -->
						<label for="journalDate">Date of entry</label>
						<input type="date" name="journalDate" id="journalDate" />
						<!-- This will keep track of what the concept covered in the journal entry -->
						<label for="journalConcept">Concepts Covered</label>
						<input type="text" name="journalConcept" id="journalConcept" />
						<!-- This will track your mood when you submitted the journal -->
						<label for="journalMood">Mood</label>
						<select name="journalMood" id="journalMood">
							<option value="Sad">Sad</option>
							<option value="Mad">Mad</option>
							<option value="Stressed">Stressed</option>
							<option value="Happy">Happy</option>
							<option value="Excited">Excited</option>
						</select>
						<!-- this is the button for submitting the journal -->
						<input id="recordEntry" type="button" value="Record Journal Entry" onclick="click" />
					</div>
				</fieldset>`;
};
