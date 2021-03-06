
const styles = {

    Card: {
        display: 'flex',
        flexDirection: 'row',
        justifyCcontent: 'center',
        alignItems: 'stretch',
        boxSizing: 'borderBox',
        background: 'var( --ha-card-background, var(--card-background-color, white) )'
    },
    Section: {
        boxSizing: 'border-box',
        width: '50%',
        height: '100%',
        padding: '0 16px 32px 16px'
    },
    Default: {
        borderRadius: 4,
        boxShadow: 'var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) )',
        color: 'var(--primary-text-color)'
    },
    Neumorphic: {
        borderRadius: 16,
        boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
        margin: 24
    },
    Root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: '100%'
    },
    Header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: '100%'
    },
    NameStatus: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        padding: 24,
    },
    HeaderText: {
        fontWeight: 'bold',
        fontSize: 22,
        margin: 0,
        color: 'var(--primary-text-color)',
    },
    Content: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    StatusDot: {
        margin: '0 10px',
        height: 10,
        width: 10,
        borderRadius: 5,
        boxSizing: 'border-box',
    },

    PowerButton: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        width: 32,
        height: 32,
        fontSize: 22,
        lineHeight: '22px',
        boxSizing: 'border-box',
        padding: 0,
        marginRight: 24,
        marginLeft: 24,
        color: 'var(--primary-text-color)'
    }

};

export default styles;