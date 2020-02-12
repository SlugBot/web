const MOBILE_NAV_ICON_ACTIVE = 'fa-bars';
const MOBILE_NAV_ICON_INACTIVE = 'fa-times';

const $MOBILE_NAV_BUTTON = document.getElementById('mobile-button-icon');
const $MOBILE_NAV_MENU = document.getElementById('navigation-mobile');

const $MODAL_BACKGROUND = document.getElementById('modal-background');
const $MODAL = document.getElementById('modal');

var mobileNavActive = false;

function modalGenerateQualities(command) {
	let $qualities = document.getElementById('modal-qualities');
	$qualities.innerHTML = "";

	if (command.canDM) {
		let quality = document.createElement('li');
		quality.innerText = "Functions in DMs";
		$qualities.appendChild(quality);
	}
	if (command.canEdit) {
		let quality = document.createElement('li');
		quality.innerText = "Command can be edited";
		$qualities.appendChild(quality);
	}
	if (command.perms.length === 0) {
		let quality = document.createElement('li');
		quality.innerText = "Has no permissions";
		$qualities.appendChild(quality);
	} else {
		let quality = document.createElement('li');
		quality.innerHTML = "requires permissions:";
		for (let i = 0; i < command.perms.length; i++) {
			quality.innerHTML += " <code>" + command.perms[i] + "</code>";
		}
		$qualities.appendChild(quality);
	}
}

function modalInjectParameters(command) {
	let $parameters = document.getElementById('modal-parameters');
	$parameters.innerHTML = "";

	if (command.parameters.length <= 0) {
		return;
	}

	let $header = document.createElement('h4');
	$header.innerHTML = "Parameters";
	$parameters.appendChild($header);

	let $table = document.createElement('table');

	let $thead = document.createElement('thead');
	let $thead_tr = document.createElement('tr');
	
	let $thead_th_param = document.createElement('th');
	$thead_th_param.innerHTML = "Parameter"
	$thead.appendChild($thead_th_param);
	
	let $thead_th_value = document.createElement('th');
	$thead_th_value.innerHTML = "Value"
	$thead.appendChild($thead_th_value);

	let $thead_th_desc = document.createElement('th');
	$thead_th_desc.innerHTML = "Description"
	$thead.appendChild($thead_th_desc);

	$table.appendChild($thead);


	let $tbody = document.createElement('tbody');
	for (let i = 0; i < command.parameters.length; i++) {
		let parameter = command.parameters[i];
		for (let j = 0; j < parameter.values.length; j++) {
			let $row = document.createElement('tr');
			if (j == 0) {
				$row.classList.add('param-start');
			}
			let value = parameter.values[j];

			let $param_cell = document.createElement('td');
			if (j === 0) {
				let $paramName = document.createElement('code');
				$paramName.innerText = parameter.param;
				$param_cell.appendChild($paramName);
			}
			$row.appendChild($param_cell);

			let $value_cell = document.createElement('td');
			let $valueName = document.createElement('code');
			$valueName.innerText = value.value;
			$value_cell.appendChild($valueName);
			$row.appendChild($value_cell);

			let $desc_cell = document.createElement('td');
			$desc_cell.innerText = value.desc;
			$row.appendChild($desc_cell);

			$tbody.appendChild($row);
		}
	}
	$table.appendChild($tbody);
	$parameters.appendChild($table);
}

function modalInjectExamples(command) {
	let $examples = document.getElementById('modal-examples');
	$examples.innerHTML = "";

	if (command.examples.length <= 0) {
		return;
	}

	let $header = document.createElement('h4');
	$header.innerHTML = "Examples";
	$examples.appendChild($header);


	for (let i = 0; i < command.examples.length; i++) {
		let example = command.examples[i];

		let $wrapper = document.createElement('div');
		
		let $exampleCommandWrapper = document.createElement('pre');
		$exampleCommandWrapper.classList.add('highlight');
		
		let $exampleCommand = document.createElement('code');
		$exampleCommand.innerText = example.command;
		$exampleCommandWrapper.appendChild($exampleCommand);
		
		let $desc = document.createElement('p');
		$desc.innerHTML = marked(example.desc);

		$wrapper.appendChild($exampleCommandWrapper);
		$wrapper.appendChild($desc);

		$examples.appendChild($wrapper);
	}
}

function openModal(commandName, isTwitch) {
	let command;
	if (isTwitch) {
		command = commandData.twitch[commandName];
	} 
	else {
		command = commandData.discord[commandName];
	}
	console.log(commandData);
	document.getElementById('modal-title').innerText = commandName;
	document.getElementById('modal-command').innerText = command.format.replace("${PREFIX}", "!");
	document.getElementById('modal-desc').innerHTML = marked(command.desc);

	modalGenerateQualities(command);
	modalInjectParameters(command);
	modalInjectExamples(command);

	$MODAL.classList.add('open');
	$MODAL_BACKGROUND.classList.add('open');
}

function closeModal() {
	$MODAL.classList.remove('open');
	$MODAL_BACKGROUND.classList.remove('open');
}

function prepareCommandLinks() {
	var linkElements = document.getElementsByClassName('command-link');
	for (let i = 0; i < linkElements.length; i++) {
		let element = linkElements[i];
		let dataCommand = element.getAttribute('data-command');
		dataCommand = dataCommand.split(" ");
		let commandName = dataCommand[0];
		let commandType = "discord";
		if (dataCommand[1]) {
			commandType = dataCommand[1];
		}
		element.setAttribute('title', "Click to see information about " + commandName);
		element.innerText = commandName;
		element.onclick = function() {openModal(commandName, commandType === "twitch");};
	}
}

function switchMobileMenu() {
	mobileNavActive = !mobileNavActive;

	if (mobileNavActive) {
		$MOBILE_NAV_BUTTON.classList.add(MOBILE_NAV_ICON_INACTIVE);
		$MOBILE_NAV_BUTTON.classList.remove(MOBILE_NAV_ICON_ACTIVE);
	} else {
		$MOBILE_NAV_BUTTON.classList.add(MOBILE_NAV_ICON_ACTIVE);
		$MOBILE_NAV_BUTTON.classList.remove(MOBILE_NAV_ICON_INACTIVE);
	}

	$MOBILE_NAV_MENU.classList.toggle('open');
}

window.onresize = function(event) {
	if (window.innerWidth > 680) {
		mobileNavActive = false;
		$MOBILE_NAV_BUTTON.classList.add(MOBILE_NAV_ICON_ACTIVE);
		$MOBILE_NAV_BUTTON.classList.remove(MOBILE_NAV_ICON_INACTIVE);
		$MOBILE_NAV_MENU.classList.remove('open');
	}
}


prepareCommandLinks();