export const getBountyLink = (str: string, shouldAddBadgeOnZero: boolean) => {
  const getBountyLinkMatcher = 'There is a .*?bounty.*?\\((.*?)\\).* on this issue';
  const getBountyLinkZeroMatcher = shouldAddBadgeOnZero ?
    '|' + '\\[Post a bounty on it!\\]\\((.*\\))' : '';

  console.log('should show zero badge?', shouldAddBadgeOnZero);

  const getBountyLinkRegex = new RegExp(`${getBountyLinkMatcher}${getBountyLinkZeroMatcher}`, 'm');

  const matches = getBountyLinkRegex.exec(str);

  console.log('found a match!', matches && matches[1]);

  return matches && matches[1];
};
