jQuery("#footer").empty();
var spaceKey = AJS.Meta.get("space-key");
switch (spaceKey) {
	case "SDCP":
	case "SSS":
		jQuery('#footer').append('<div style="margin:20px;" align="center">Contact Support: 24x7 | <a href="mailto:example@mail.com">example@mail.com</a> | (888) 888 – 8888 | Copyright © 2018 Example</div>');
		break;
	case "FFMS":
	case "FFMRS":
		jQuery('#footer').append('<div style="margin:20px;" align="center">Contact Support: 24x7 | <a href="mailto:example@gmail.com">mailto:example@gmail.com</a> | (777) 777-777 | Copyright © 2018 Some Company</div>');
		break;
	default:
		jQuery('#footer').append('<div style="margin:20px;" align="center"><a href="http://www.example.com" target="_Blank"> Confidential © 2018 All rights reserved </a> | <a href="http://www.example.com/website-terms-of-use" target="_Blank">Terms of Use</a> | <a href="http://www.example.com/privacy-statement" target="_Blank">Privacy Policy</a></div>');
}
