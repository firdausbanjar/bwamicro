const Clients = () => {
    const clients: string[] = ['amazon', 'microsoft', 'tesla', 'google'];

    return (
        <div className="flex items-center justify-center">
            {clients.map((client, key) => (
                <div key={key} className="w-1/6">
                    <img
                        src={`/images/logo-${client}.svg`}
                        alt={`logo ${client}`}
                        className="mx-auto"
                    />
                </div>
            ))}
        </div>
    );
};
export default Clients;
