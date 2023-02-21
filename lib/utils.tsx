export function classNameJoin(...classnames: string[]) {
  return classnames.join(' ');
}

export function getTimeSinceCreation(createdAt: Date): string {
  const now = new Date();

  const diffInMs = now.getTime() - createdAt.getTime();
  const diffInMins = Math.floor(diffInMs / (1000 * 60));
  const diffInHrs = Math.floor(diffInMins / 60);

  if (diffInMins < 1) {
    return `Just now`;
  } else if (diffInMins === 1) {
    return `1 minute ago`;
  } else if (diffInHrs < 1) {
    return `${diffInMins} minutes ago`;
  } else if (diffInHrs < 24) {
    return `${diffInHrs} hours ago`;
  } else if (diffInHrs < 48) {
    return `1 day ago`;
  } else {
    const diffInDays = Math.floor(diffInHrs / 24);
    return `${diffInDays} days ago`;
  }
}
