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
						<label for="journalConcepts">Concepts Covered</label>
						<input type="text" name="journalConcepts" id="journalConcepts" />
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
						<input type="button" value="Record Journal Entry" onclick="click" />
					</div>
				</fieldset>`;
};
