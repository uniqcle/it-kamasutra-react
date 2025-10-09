import React from "react";

class ProfileStatus extends React.Component {
    // statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status,
    };

	onStatusChange = (e) => {
		this.setState({
            status: e.currentTarget.value,
        });
	}

    activeEditMode() {
        this.setState({
            editMode: true,
        });
        this.props.updateProfileStatus();
    }

    deactiveEditMode() {
        this.setState({
            editMode: false,
        });
        this.props.updateProfileStatus(this.state.status);
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div onDoubleClick={this.activeEditMode.bind(this)}>
                        {this.props.status || "No status"}
                    </div>
                )}

                {this.state.editMode && (
                    <div>
                        <input
                            ref={this.statusInputRef}
                            onChange={this.onStatusChange}
                            autofocus={true}
                            onBlur={this.deactiveEditMode.bind(this)}
                            value={this.props.status}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
