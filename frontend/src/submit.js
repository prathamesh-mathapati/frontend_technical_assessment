// submit.js
import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:8000/pipelines/parse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nodes,
                    edges,
                }),
            });

            const data = await response.json();

            alert(
                `Submission Successful!\n` +
                `Number of Nodes: ${data.num_nodes}\n` +
                `Number of Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag}`
            );
        } catch (error) {
            console.error("Error submitting pipeline:", error);
            alert("Failed to submit pipeline. check console for details.");
        }
    }

    return (
        <div className="submit-container">
            <button type="submit" className="submit-button" onClick={handleSubmit}>
                Submit Pipeline
            </button>
        </div>
    );
}