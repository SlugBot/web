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
		quality.innerText = "Can be DM'ed";
		$qualities.appendChild(quality);
	}
	if (command.canEdit) {
		let quality = document.createElement('li');
		quality.innerText = "Can be edited after creation";
		$qualities.appendChild(quality);
	}
	if (command.perms.length === 0) {
		let quality = document.createElement('li');
		quality.innerText = "Has no permissions";
		$qualities.appendChild(quality);
	} else {
		let quality = document.createElement('li');
		quality.innerHTML = "Has following permissions:";
		for (let i = 0; i < command.perms.length; i++) {
			quality.innerHTML += " <code>" + command.perms[i] + "</code>";
		}
		$qualities.appendChild(quality);
	}
}

function modalInjectParameters(command) {
	let $parameters = document.getElementById('modal-parameters');
	$parameters.innerHTML = "";

	for (let i = 0; i < command.parameters.length; i++) {
		let parameter = command.parameters[i];

		let $title = document.createElement('span');
		let $paramName = document.createElement('code');
		$paramName.innerText = parameter.param;
		$title.appendChild($paramName);
		$title.innerHTML += "can have the following values:";

		let $list = document.createElement('ul');
		for (let j = 0; j < parameter.values.length; j++) {
			let value = parameter.values[j];
			let $valueElement = document.createElement('li');
			
			let $valueName = document.createElement('code');
			$valueName.innerText = value.value;
			$valueElement.appendChild($valueName);
			
			$valueElement.innerHTML += " - " + value.desc;

			$list.appendChild($valueElement);
		}

		$title.appendChild($list);

		$parameters.appendChild($title);
	}
}

function modalInjectExamples(command) {
	let $examples = document.getElementById('modal-examples');
	$examples.innerHTML = "";

	for (let i = 0; i < command.examples.length; i++) {
		let example = command.examples[i];

		let $wrapper = document.createElement('div');
		
		let $exampleCommandWrapper = document.createElement('pre');
		$exampleCommandWrapper.classList.add('highlight');
		
		let $exampleCommand = document.createElement('code');
		$exampleCommand.innerText = example.command;
		$exampleCommandWrapper.appendChild($exampleCommand);
		
		let $desc = document.createElement('p');
		$desc.innerText = example.desc; //todo does not support markdown;

		$wrapper.appendChild($exampleCommandWrapper);
		$wrapper.appendChild($desc);

		$examples.appendChild($wrapper);
	}
}

function openModal(commandName) {
	let command = commandData[commandName];
	document.getElementById('modal-title').innerText = commandName;
	document.getElementById('modal-desc').innerText = command.desc; //todo this doesn't support markdown

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
		let commandName = element.getAttribute('data-command');
		element.setAttribute('title', "Click to see information about " + commandName);
		element.innerText = commandName;
		element.onclick = function() {openModal(commandName)};
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