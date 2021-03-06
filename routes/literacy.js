var WebLitClient = require('web-literacy-client');
var wlc = new WebLitClient();

module.exports = function (req, res) {
  wlc.lang(req.localeInfo.lang);
  return res.render('literacy.html', {
    page: 'literacy',
    wlc: wlc,
    wlcPoints: {
      "weblit-Navigation": [
        "StandardExploringNavPoint1",
        "StandardExploringNavPoint2",
        "StandardExploringNavPoint3",
        "StandardExploringNavPoint4",
        "StandardExploringNavPoint5"
      ],
      "weblit-WebMechanics": [
        "StandardExploringWMPoint1",
        "StandardExploringWMPoint2",
        "StandardExploringWMPoint3"
      ],
      "weblit-Search": [
        "StandardExploringSearchPoint1",
        "StandardExploringSearchPoint2",
        "StandardExploringSearchPoint3",
        "StandardExploringSearchPoint4",
        "StandardExploringSecurityPoint1",
        "StandardExploringSecurityPoint2",
        "StandardExploringSecurityPoint3"
      ],
      "weblit-Credibility": [
        "StandardExploringCredibilityPoint1",
        "StandardExploringCredibilityPoint2",
        "StandardExploringCredibilityPoint3",
        "StandardExploringCredibilityPoint4"
      ],
      "weblit-Security": [
        "StandardExploringSecurityPoint1",
        "StandardExploringSecurityPoint2",
        "StandardExploringSecurityPoint3"
      ],
      "weblit-Composing": [
        "StandardBuildingComposingPoint1",
        "StandardBuildingComposingPoint2",
        "StandardBuildingComposingPoint3",
        "StandardBuildingComposingPoint4",
        "StandardBuildingComposingPoint5"
      ],
      "weblit-Remix": [
        "StandardBuildingRemixingPoint1",
        "StandardBuildingRemixingPoint2",
        "StandardBuildingRemixingPoint3"
      ],
      "weblit-DesignAccessibility": [
        "StandardBuildingDesignPoint1",
        "StandardBuildingDesignPoint2",
        "StandardBuildingDesignPoint3",
        "StandardBuildingDesignPoint4",
        "StandardBuildingDesignPoint5",
        "StandardBuildingDesignPoint6"
      ],
      "weblit-CodingScripting": [
        "StandardBuildingCodingPoint1",
        "StandardBuildingCodingPoint2",
        "StandardBuildingCodingPoint3",
        "StandardBuildingCodingPoint4",
        "StandardBuildingCodingPoint5",
      ],
      "weblit-Infrastructure": [
        "StandardBuildingInfraPoint1",
        "StandardBuildingInfraPoint2",
        "StandardBuildingInfraPoint3",
        "StandardBuildingInfraPoint4",
        "StandardBuildingInfraPoint5"
      ],
      "weblit-Sharing": [
        "StandardConnectingSharingPoint1",
        "StandardConnectingSharingPoint2",
        "StandardConnectingSharingPoint3",
        "StandardConnectingSharingPoint4",
        "StandardConnectingSharingPoint5",
        "StandardConnectingSharingPoint6"
      ],
      "weblit-Collaborating": [
        "StandardConnectingCommunityPoint1",
        "StandardConnectingCommunityPoint2",
        "StandardConnectingCommunityPoint3",
        "StandardConnectingCommunityPoint4",
        "StandardConnectingCommunityPoint5",
        "StandardConnectingCommunityPoint6"
      ],
      "weblit-Community": [
        "StandardConnectingCommunityPoint1",
        "StandardConnectingCommunityPoint2",
        "StandardConnectingCommunityPoint3",
        "StandardConnectingCommunityPoint4",
        "StandardConnectingCommunityPoint5",
        "StandardConnectingCommunityPoint6"
      ],
      "weblit-Privacy": [
        "StandardConnectingPrivacyPoint1",
        "StandardConnectingPrivacyPoint2",
        "StandardConnectingPrivacyPoint3",
        "StandardConnectingPrivacyPoint4",
        "StandardConnectingPrivacyPoint5"
      ],
      "weblit-OpenPractices": [
        "StandardConnectingOpenPoint1",
        "StandardConnectingOpenPoint2",
        "StandardConnectingOpenPoint3",
        "StandardConnectingOpenPoint4"
      ]
    }

  });
};
