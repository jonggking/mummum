const getTimeFromCreatedAt = (createdAt: string | undefined): string | null => {
  if (createdAt === undefined) {
    return null;
  }
  const time = createdAt.match(/\d{2}:\d{2}:\d{2}/)?.[0] as string;
  return time ? time : null;
};

export default getTimeFromCreatedAt;
