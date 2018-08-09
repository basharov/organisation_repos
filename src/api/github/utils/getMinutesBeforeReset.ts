export const getMinutesBeforeReset = (timestamp: number) => {
    const now = new Date();
    const diff = new Date(timestamp).getTime() - now.getTime();
    return (Math.floor(diff / 60000));
};
