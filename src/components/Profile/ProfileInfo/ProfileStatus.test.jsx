import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="TEST STATUS" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("TEST STATUS");
    });

    test("did the span with status appear first", () => {
        const component = create(<ProfileStatus status="TEST STATUS" />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("after creation input should be displayed", () => {
        const component = create(<ProfileStatus status="TEST STATUS" />);
        const root = component.root;
        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });

    test("status in span should be equal status in props", () => {
        const component = create(<ProfileStatus status="TEST STATUS" />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('TEST STATUS');
    });

    test("input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status="TEST STATUS" />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('TEST STATUS');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="TEST STATUS"
        updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});