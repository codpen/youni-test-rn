const HeaderBackground = require('../assets/img/header_background.png');
const Map = require('../assets/img/map.png');
const Organize = require('../assets/img/organize.png');
const CalendarPlus = require('../assets/img/calendar-plus.png');
const Direction = require('../assets/img/direction.png');
const HeartRound = require('../assets/img/heart-rounded.png');
const Share = require('../assets/img/share.png');
const HeaderVisible = require('../assets/img/invisible.png');
const LocationTab = require('../assets/img/tabs/location.png');
const LocationActiveTab = require('../assets/img/tabs/location-active.png');
const GroupTab = require('../assets/img/tabs/group.png');
const GroupActiveTab = require('../assets/img/tabs/group-active.png');
const NonfillTab = require('../assets/img/tabs/nonfill.png');
const NonfillActiveTab = require('../assets/img/tabs/nonfill-active.png');
const LocationPinTab = require('../assets/img/tabs/location-pin.png');
const LocationPinActiveTab = require('../assets/img/tabs/location-pin-active.png');
const ProfileTab = require('../assets/img/tabs/profile.png');
const ProfileActiveTab = require('../assets/img/tabs/profile-active.png');

const AIcon = require('../assets/img/avatars/a.png');
const BIcon = require('../assets/img/avatars/b.png');
const CIcon = require('../assets/img/avatars/c.png');
const ExtraIcon = require('../assets/img/avatars/etc.png');
const ChevronLeft = require('../assets/img/chevron-left.png');

export function useAssets(type: string) {
  const route = type.split('.');
  switch (route[0]) {
    case 'main':
      return mainAssets(route[1]);
    case 'avatar':
      return avatarAssets(route[1]);
    default:
      return null;
  }
}

function mainAssets(path: string) {
  switch (path) {
    case 'location_tab':
      return LocationTab;
    case 'location_active_tab':
      return LocationActiveTab;
    case 'group_tab':
      return GroupTab;
    case 'group_active_tab':
      return GroupActiveTab;
    case 'nonfil_tab':
      return NonfillTab;
    case 'nonfil_active_tab':
      return NonfillActiveTab;
    case 'location_pin_tab':
      return LocationPinTab;
    case 'location_pin_active_tab':
      return LocationPinActiveTab;
    case 'profile_tab':
      return ProfileTab;
    case 'profile_active_tab':
      return ProfileActiveTab;
    case 'header_background':
      return HeaderBackground;
    case 'map':
      return Map;
    case 'organize':
      return Organize;
    case 'calendar':
      return CalendarPlus;
    case 'direction':
      return Direction;
    case 'chevron':
      return ChevronLeft;
    case 'heart':
      return HeartRound;
    case 'share':
      return Share;
    case 'header-invisible':
      return HeaderVisible;
    default:
      return null;
  }
}

function avatarAssets(path: string) {
  switch (path) {
    case 'a':
      return AIcon;
    case 'b':
      return BIcon;
    case 'c':
      return CIcon;
    case 'etc':
      return ExtraIcon;
    default:
      return null;
  }
}
